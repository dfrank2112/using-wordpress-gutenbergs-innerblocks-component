<?php
/**
 * Plugin Name: InnerBlocks Test Block
 * Plugin URI: https://github.com/dfrank2112/using-wordpress-gutenbergs-innerblocks-component
 * Description: Testing ground for new ideas
 * Author: Josh Baker
 * Author URI: https://jbaker.media/
 * Version: 0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package JABTEST
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

function _get_test_plugin_url() {
    static $plugin_url;

    if ( empty( $plugin_url ) ) {
        $plugin_url = plugins_url( null, __FILE__ );
    }

    return $plugin_url;
}

include __DIR__ . '/php/enqueue-assets.php';
