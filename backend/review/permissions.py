from rest_framework import permissions


class ReviewPermission(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.created_by or request.user.is_staff
