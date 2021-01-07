<?php declare( strict_types = 1 );

namespace Setup;

use App\Services\ContainerService;
use App\Services\UserService;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function register_routes_auth(): void {
	register_rest_route(
		'digimon/v1',
		'/auth',
		[
			'methods' => 'GET',
			'callback' => static function() {
				return ContainerService::getInstance()[UserService::class]->auth();
			},
		]
	);

	register_rest_route(
		'digimon/v1',
		'login',
		[
			'methods' => 'POST',
			'callback' => static function( $request ) {
				$username = $request->get_param( 'username' );
				$password = $request->get_param( 'password' );

				return ContainerService::getInstance()[UserService::class]->login( $username, $password );
			},
		]
	);

	register_rest_route(
		'digimon/v1',
		'logout',
		[
			'methods' => 'POST',
			'callback' => static function() {
				return ContainerService::getInstance()[UserService::class]->logout();
			},
			// 'permissions_callback' => 'is_user_logged_in'
		]
	);
}
