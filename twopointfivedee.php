<?php
/**
 * Plugin Name:     Two.fivedee
 * plugin URI:        https://github.com/jshwlkr/twopointfivedee
 * Description:     A block for displaying an animated "2.5D" image effect.
 * version:         1.0.0
 * Author:          Joshua Walker
 * Author URI:        https://jshwlkr.info
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       twopointfivedee
 * GitHub Plugin URI: jshwlkr/twopointfivedee
 * Release Asset:     true
 * Primary Branch:    main
 *
 * @package         oddities
 *
 * Inspiration:     https://medium.com/sitepoint/parallax-burns-converting-photographs-from-2d-to-3d-with-svg-affdb36a027c
 *
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function twopointfivedee_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/admin/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "oddities/twopointfivedee" block first.'
		);
	}
	$index_js     = 'admin/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'oddities-twopointfivedee-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'oddities-twopointfivedee-block-editor', 'twopointfivedee' );

	$editor_css = 'admin/style-index.css';
	wp_register_style(
		'oddities-twopointfivedee-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'admin/style-index.css';
	wp_register_style(
		'oddities-twopointfivedee-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	// https://github.com/WordPress/gutenberg/pull/22754
	// https://mkaz.blog/wordpress/conditionally-load-block-assets-part-2/

	register_block_type( 'oddities/twopointfivedee', array(
		'editor_script' => 'oddities-twopointfivedee-block-editor',
		'editor_style'  => 'oddities-twopointfivedee-block-editor',
		'render_callback' => function( $attribs, $content ) {
			wp_enqueue_style( 'oddities-twopointfivedee-block' );
			return $content;
		}
	) );

}
add_action( 'init', 'twopointfivedee_block_init' );
