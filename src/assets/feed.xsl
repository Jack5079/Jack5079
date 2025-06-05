<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"
   xmlns:content="http://purl.org/rss/1.0/modules/content/">
   <xsl:template match="rss/channel">
      <html>
		<head>
			<link rel="alternate" href="/blog/" type="text/html" />
			<link rel="canonical" href="/blog/" />
			<link rel="icon" href="/blog.svg" />
			<title>Jack.cab/blog/ RSS</title>
			<meta name="color-scheme" content="dark light" />
			<style>
				h1,h2 {
					font-family: "Inter Display", "Inter Variable", "Inter", sans-serif;
				}
				body {
	font-family: "Inter Variable", "Inter", sans-serif;
	margin: auto;
	padding: 20px;
	max-width: 800px;
	line-height: 1.5;
	accent-color: #ff4539;
	@media (prefers-color-scheme: dark) {
		background-color: #00000f;
		color: #fff;
	}
}
:root {
	scrollbar-color: #ff4539 transparent;
}
			h1 {
				text-align: center;
			}
			img {
				image-rendering: pixelated;
				@media (prefers-color-scheme: light) {
					filter: invert(1);
				}
			}
			li a {
				display: block;
			}
			h2 {
				flex-grow: 1;
				margin-block-end: 0;
			}
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			time {
				font-size: 0.8em;
				float: right;
				text-transform: uppercase;
				font-family: "Adwaita Mono",monospace;
			}
			@media (max-width: 230px) {
	body {
		padding: 0;
	}
}
a {
	color: #ff4539;
}
	.u-uid {
		font-family: "Adwaita Mono",monospace;
		text-transform: uppercase;
		display: block;
		color: currentColor;
		margin: 0.5em 0;
		font-weight: bold;
		text-decoration: none;

		@media (prefers-color-scheme: light) {
			img {
				filter: invert(1);
			}
		}
	}
		</style>
		</head>
      <body>
		<nav>
			<a href="/" class="u-url u-uid" rel="author">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQAgMAAABfD3aUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlQTFRFAAAAAAAA////g93P0gAAAAF0Uk5TAEDm2GYAAAA2SURBVAjXLcqxCcBADMVQcVXwJMFTZpQjldGU9wkpXiNEC74P7h13VCxUhmaM6zf9Ncs80jUHwegVF1+wUSkAAAAASUVORK5CYII"
					alt=""
					decoding="async"
					style="image-rendering:pixelated"
					width="12"
					height="16"
				/>
				<span class="p-name">
					Jack.cab
				</span>
			</a>
		</nav>
        <h1><img
			width="48"
			height="64"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQAgMAAABfD3aUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAxQTFRFAAAAAAAAAAAA////NVcRhAAAAAF0Uk5TAEDm2GYAAAA3SURBVAjXLcqxCcAwEATBBRXwDRm+dYEbEjh9WF3gYFg4jhb8Np4TT1QsVIZmdhjv32yW+UjXXEQHIRA5bnbJAAAAAElFTkSuQmCC"
			alt=""
		/><br /><xsl:value-of select="title" /></h1>
		<p><xsl:value-of select="description" /></p>
		<ul class="u-feed">
		<xsl:for-each select="item">
			<li class="h-entry">
				<h2 class="p-name"><a href="{link}" class="u-url">
					<xsl:value-of select="title" />
				</a></h2>
				<time class="dt-published" datetime="{pubDate}">
					<xsl:variable name="dateStr" select="pubDate" />
					<xsl:variable name="day" select="substring($dateStr, 6, 2)" />
					<xsl:variable name="month" select="substring($dateStr, 9, 3)" />
					<xsl:variable name="year" select="substring($dateStr, 13, 4)" />
					<xsl:value-of select="concat($month, ' ', number($day))" />
				</time>
				<p class="p-summary"><xsl:value-of select="description" /></p>
			</li>
		</xsl:for-each>
		</ul>
      </body>
      </html>
   </xsl:template>
</xsl:stylesheet>