from rest_framework import permissions, viewsets

perms_admin_only = [permissions.IsAdminUser]
perms_allow_any = [permissions.AllowAny]
perms_authenticated = [permissions.IsAuthenticated]