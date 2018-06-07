<div id="tool-header" class="header">

	<div class="container">

		<div class="table-wrap">

			<div class="logo align-text-left">
				
				<a href="/">
					<i class="icon icon-aaa fill-white">
		                <svg><use xlink:href="/img/spritemap.svg#bull-interactive-logo"></use><svg>
		            </i>
					<span class="visuallyhidden">Cohere</span>
				</a>

			</div>

			<div class="align-text-right">

				<?php
					$serverRoot = $_SERVER['DOCUMENT_ROOT'];
					$styleGuide = $serverRoot.'/style-guide.php';

					if (file_exists($styleGuide)) {
						echo '<a href="/style-guide.php" class="button-link button-link-default alt">Style Guide</a>';
					}
				?>
				<a href="#" class="button-link button-link-default alt tool-menu-button">Menu</a>
			</div>

		</div>

	</div>

	<div class="tool-header-trigger">
		<a href="#">
			<i class="icon icon-trigger">
                <svg><use xlink:href="/img/spritemap.svg#icon-plus-circle"></use><svg>
            </i>
		</a>
	</div>

</div>

<div id="tool-nav" class="nav">

	<div class="nav-wrap-inner">

		<div class="align-text-right">
			<a href="#" class="button-link tool-menu-button">Close</a>
		</div>

        <?php 

       		$tempServerPath = $_SERVER['DOCUMENT_ROOT'] . "/inc/templates";
        	$tempPath = "/inc/templates";
			if (count(glob($tempServerPath)) > "0" ) { 

		?>
	
			<div class="nav-group">
				
				<h4>Applications</h4>

				<ul>

	                <?php foreach( glob( $tempServerPath.'/*.php' ) as $template ) : ?>

	                	<?php $templateName = basename($template, ".php"); ?>

	                    <?php if ( $templateName !== "index" ) { ?>
	                     		
	                     	<li>
	
								<a href="<?php echo $tempPath."?template=".$templateName; ?>">
									
	                                <?php echo ucwords( str_replace( '-', ' ', $templateName ) ); ?>

	                            </a>

							</li>

						<?php }  ?>
	                    
	                <?php endforeach; ?>

	            </ul>

			</div>

		<?php } ?>

 		<?php 

 			$modServerPath = $_SERVER['DOCUMENT_ROOT'] . "/inc/modules";
 			$modPath = "/inc/modules";
			if (count(glob($modServerPath)) > "0" ) { 

		?>

			<div class="nav-group">

				<h4>Modules</h4>

				<ul>

	                <?php foreach( glob( $modServerPath.'/*.php' ) as $module ) : ?>

	                	<?php $moduleName = basename($module, ".php"); ?>

	                    <?php if ( $moduleName !== "index" ) { ?>
	                     		
	                     	<li>
	
								<a href="<?php echo $modPath."?module=".$moduleName; ?>">
									
	                                <?php echo ucwords( str_replace( '-', ' ', $moduleName ) ); ?>

	                            </a>

							</li>

						<?php }  ?>
	                    
	                <?php endforeach; ?>

	            </ul>

			</div>

		<?php } ?>

		<?php 

 			$collectionServerPath = $_SERVER['DOCUMENT_ROOT'] . "/inc/collections";
 			$collectionPath = "/inc/collections";
			if (count(glob($collectionServerPath)) > "0" ) { 

		?>

			<div class="nav-group">

				<h4>Collections</h4>

				<ul>

	                <?php foreach( glob( $collectionServerPath.'/*.php' ) as $collection ) : ?>

	                	<?php $collectionName = basename($collection, ".php"); ?>

	                    <?php if ( $collectionName !== "index" ) { ?>
	                     		
	                     	<li>
	
								<a href="<?php echo $collectionPath."?collection=".$collectionName; ?>">
									
	                                <?php echo ucwords( str_replace( '-', ' ', $collectionName ) ); ?>

	                            </a>

							</li>

						<?php }  ?>
	                    
	                <?php endforeach; ?>

	            </ul>

			</div>

		<?php } ?>

	</div>

</div>

<!-- Begin #tool-container -->
<div id="tool-container">