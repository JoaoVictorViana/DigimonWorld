<?php declare( strict_types = 1 );

namespace App;

function action_theme_enqueue_assets(): void {
    wp_enqueue_style(
        'app-theme',
        get_theme_file_uri( '/dist/theme.css' ),
        [],
        filemtime( get_theme_file_path( '/dist/theme.css' ) )
    );

    wp_enqueue_script(
        'app-theme',
        get_theme_file_uri( '/dist/theme.js' ),
        ['jquery'],
        filemtime( get_theme_file_path( '/dist/theme.js' ) ),
        true
    );
}
