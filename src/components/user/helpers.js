import {adminIcon, superAdminIcon} from './styledComponents/icons/badgeIcons'

export function getUserBadgeIcon(user) {
    return user.isGroupAdmin ? adminIcon : user.isAdmin ? superAdminIcon : null;
}