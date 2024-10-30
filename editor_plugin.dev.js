/**
 * WordPress Inline Quote plugin.
 */

(function() {
	tinymce.create('tinymce.plugins.WPInlineQuotePlugin', {
		init : function(ed, url) {
			ed.addCommand('QTag', function() {
				tinymce.activeEditor.formatter.register( 'quote', {inline : 'q'} );
				tinymce.activeEditor.formatter.toggle('quote');
			});
			
			ed.addButton('quote', {
				title : 'Inline Quote (Alt+Shift+I)',
				image : url + '/inline-quote.png',
				cmd : 'QTag'
			});
			
			ed.addShortcut('alt+shift+i', 'Inline Quote', 'QTag');
		},


		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Inline Quote Plugin for Wordpress',
				author : 'Samir Shah',
				authorurl : 'http://rayofsolaris.net',
				infourl : 'http://rayofsolaris.net/code/inline-quote-for-wordpress',
				version : "0.1"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('wpinlinequote', tinymce.plugins.WPInlineQuotePlugin);
})();