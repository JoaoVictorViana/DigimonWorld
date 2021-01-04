<?php declare( strict_types = 1 );

namespace App\Services;

class ContainerService extends \ArrayIterator {

	/**
	 * Static Instance
	 *
	 * @var static $instance.
	 */
	protected static $instance;

	public static function getInstance(): self {
		if ( ! static::$instance ) {
			static::$instance = new static;
		}

		return static::$instance;
	}

}
