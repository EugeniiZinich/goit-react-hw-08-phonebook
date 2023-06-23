export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsRegistered = state => state.auth.isRegistered;

export const selectUserAvatar = state => state.auth.avatarUrl;

export const selectUserSubscr = state => state.subscription;
