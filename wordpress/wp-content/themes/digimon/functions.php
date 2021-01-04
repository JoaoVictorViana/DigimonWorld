<?php declare( strict_types = 1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const APP_DIR = __DIR__ . DIRECTORY_SEPARATOR;
const APP_APP_DIR_NAME = 'app';
const APP_APP_SETUP_DIR_NAME = 'setup';
const APP_APP_SRC_DIR_NAME = 'src';
const APP_APP_SRC_SERVICES_DIR_NAME = 'Services';
const APP_VENDOR_DIR_NAME = 'vendor';

const APP_APP_DIR = APP_DIR . APP_APP_DIR_NAME . DIRECTORY_SEPARATOR;
const APP_APP_SETUP_DIR = APP_APP_DIR . APP_APP_SETUP_DIR_NAME . DIRECTORY_SEPARATOR;
const APP_APP_SRC_DIR = APP_APP_DIR . APP_APP_SRC_DIR_NAME . DIRECTORY_SEPARATOR;
const APP_APP_SRC_SERVICES_DIR = APP_APP_SRC_DIR . APP_APP_SRC_SERVICES_DIR_NAME . DIRECTORY_SEPARATOR;
const APP_VENDOR_DIR = APP_DIR . APP_VENDOR_DIR_NAME . DIRECTORY_SEPARATOR;

if ( file_exists( APP_VENDOR_DIR . 'autoload.php' ) ) {
	require_once APP_VENDOR_DIR . 'autoload.php';
}

require_once APP_APP_DIR . 'hooks.php';
