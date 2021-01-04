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
			} ,
		]
	);
}
