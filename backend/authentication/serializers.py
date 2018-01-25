from rest_framework import serializers
from rest_framework.authtoken.models import Token

from authentication.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    is_staff = serializers.BooleanField(read_only=True)
    is_active = serializers.BooleanField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'is_staff', 'is_active', 'password',)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class TokenSerializer(serializers.ModelSerializer):
    user_instance = UserSerializer(source='user')

    class Meta:
        model = Token
        fields = ('key', 'user_instance', 'created',)
