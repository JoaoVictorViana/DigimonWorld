<?php declare( strict_types = 1 );

/**
 * Template Name: Home Template
 */

?>

<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="game" id="home-root"></div>
<?php get_footer(); ?>
