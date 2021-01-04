<?php declare( strict_types = 1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once APP_APP_SRC_SERVICES_DIR . 'containers.php';
require_once APP_APP_SETUP_DIR . 'assets.php';
require_once APP_APP_SETUP_DIR . 'rest_api-auth.php';

add_action( 'wp_enqueue_scripts', 'Setup\action_theme_enqueue_assets' );
add_action( 'rest_api_init', 'Setup\register_routes_auth' );
