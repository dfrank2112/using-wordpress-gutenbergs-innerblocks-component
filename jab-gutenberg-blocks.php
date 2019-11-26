<?php
/**
 * Plugin Name: InnerBlocks Test Block
 * Plugin URI: https://jbaker.media/
 * Description: Custom Gutenberg blocks, built by Josh
 * Author: Josh Baker
 * Author URI: https://jbaker.media/
 * Version: 0.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package JAB
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

function _get_plugin_url() {
    static $plugin_url;

    if ( empty( $plugin_url ) ) {
        $plugin_url = plugins_url( null, __FILE__ );
    }

    return $plugin_url;
}

include __DIR__ . '/php/enqueue-assets.php';

add_action('enqueue_block_assets', 'jab_block_assets');
