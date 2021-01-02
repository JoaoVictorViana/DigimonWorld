<?php declare( strict_types = 1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once APP_APP_SETUP_DIR . 'assets.php';

add_action( 'wp_enqueue_scripts', 'App\action_theme_enqueue_assets' );
