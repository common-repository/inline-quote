<?php
/*                                                                                                                 
Plugin Name: Inline Quote
Plugin URI: http://rayofsolaris.net/code/inline-quote-for-wordpress
Description: Introduces a button to the Wordpress WYSIWYG editor that allows the use of inline quotes.
Version: 0.1
Author: Samir Shah
Author URI: http://rayofsolaris.net/
License: GPL2
*/

if( !defined('ABSPATH') ) exit;

class InlineQuote {
	function __construct() {
		if( is_admin() ) {
			add_filter( 'mce_external_plugins', array( $this, 'add_plugin' ) );
			add_filter( 'mce_buttons' , array( $this, 'insert_button' ) );
		}
	}
	
	function insert_button( $buttons ){
		// button is inserted before the blockquote button
		$output = array();
		foreach( $buttons as $v ) {
			if( 'blockquote' == $v )
				$output[] = 'quote';
			$output[] = $v;
		}
		return $output;
	}
	
	function add_plugin( $plugins ) {
	   $plugins['wpinlinequote'] = plugin_dir_url( __FILE__ ) . 'editor_plugin.js';
	   return $plugins;
	}
}
 
new InlineQuote();