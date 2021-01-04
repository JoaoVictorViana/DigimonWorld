<?php declare( strict_types = 1 );

namespace App\Services;

require_once APP_APP_SRC_SERVICES_DIR . 'ContainerService.php';
require_once APP_APP_SRC_SERVICES_DIR . 'UserService.php';

function register_containers(): void {
	ContainerService::getInstance()[UserService::class] = new UserService;
}

register_containers();
