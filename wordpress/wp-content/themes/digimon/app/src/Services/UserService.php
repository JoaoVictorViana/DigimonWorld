<?php declare( strict_types = 1 );

namespace App\Services;

class UserService {

	public function auth(): bool {
		return is_user_logged_in();
	}

	/**
	 * Login in Game.
	 *
	 * @param string $username Username.
	 * @param string $password Password.
	 */
	public function login( string $username, string $password ): bool {
		$user = wp_authenticate( $username, $password );

		if ( is_wp_error( $user ) ) {
			return false;
		}

		wp_signon( ['user_login' => $username, 'user_password' => $password] );

		return true;
	}

	public function logout(): void {
		wp_logout();
		wp_safe_redirect( '/' );
	}

}
