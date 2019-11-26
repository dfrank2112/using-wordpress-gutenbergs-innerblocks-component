<?php
function jab_block_assets()
{
    $style_path = '/build/css/blocks-save.css';
    $react_path = '/build/js/react.min.js';

    // Styles
    wp_enqueue_style(
        'jab-block-save-style',
        _get_plugin_url() . $style_path,
        ''
    );

    // React script
    wp_enqueue_script(
        'jab-react-js',
        _get_plugin_url() . $react_path,
        ['wp-element'],
        null,
        true
    );

    // Localize conditional check
    // for admin dashboard
    wp_localize_script(
        'jab-react-js',
        'app',
        array('isAdmin' => is_admin())
    );

    // Localize site url
    wp_localize_script(
        'jab-react-js',
        'blocks',
        array('siteUrl' => __(get_site_url()))
    );
}
add_action('enqueue_block_assets', 'jab_block_assets');

function jab_editor_assets()
{
    $blocks_path = '/build/js/blocks.min.js';

    $style_path = '/build/css/blocks-edit.css';

    // Register our block script with WordPress
    wp_enqueue_script(
        'jab-block-js',
        _get_plugin_url() . $blocks_path,
        [ 'wp-blocks', 'wp-i18n', 'wp-element'],
        true
    );

    // Register our block's editor-specific CSS
    wp_enqueue_style(
        'jab-block-editor-style',
        _get_plugin_url() . $style_path,
        [ 'wp-edit-blocks' ]
    );
}
add_action('enqueue_block_editor_assets', 'jab_editor_assets');
