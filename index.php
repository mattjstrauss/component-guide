<?php include_once('inc/global/head.php'); ?>

	<?php include_once('inc/global/tool-header.php'); ?>
	
	<div class="index-container">

		<div class="container">

			<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

			<div class="row">

	            <div class="col-sm-12">

	                <h1 class="content-label">Table Of Contents</h1>

	            </div>

	        </div>

	 		<?php 

	        	$componentPath = "inc/components";
				if (count(glob($componentPath)) > "0" ) { 

			?>

		    	<div class="row">

		            <div class="col-sm-12">

		            	<h2>Components</h2>

		            	<div class="copy-col-2">

			            	<ul>

			                	<?php $componentPath = "inc/components"; ?>

			                    <?php foreach( glob( $componentPath.'/*.php' ) as $component ) : ?>

			                    	<?php $componentName = basename($component, ".php"); ?>

				                    <?php if ( $componentName !== "index" ) { ?>
				                     		
				                     	<li>
				
											<a href="<?php echo $componentPath."?component=".$componentName; ?>">
												
				                                <?php echo ucwords( str_replace( '-', ' ', $componentName ) ); ?>

				                            </a>

										</li>

									<?php }  ?>
			                        
			                    <?php endforeach; ?>

			                </ul>

			            </div>

		            </div>

		 		</div>

		 	<?php } ?>

		 	<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

	 		<div class="row">

	 			<?php 

		        	$collectionPath = "inc/collections";
					if (count(glob($collectionPath)) > "0" ) { 

				?>

		            <div class="col-sm-6">

		            	<h2>Collections</h2>

		            	<div>

			            	<ul>

			                	<?php $collectionPath = "inc/collections"; ?>

			                    <?php foreach( glob( $collectionPath.'/*.php' ) as $collection ) : ?>

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

		            </div>

		 		<?php } ?>
		

		 		<?php 

		        	$templatePath = "inc/templates";
					if (count(glob($templatePath)) > "0" ) { 

				?>

		            <div class="col-sm-6">

		            	<h2>Templates</h2>

		            	<div class="">

			            	<ul>

			                	<?php $templatePath = "inc/templates"; ?>

			                    <?php foreach( glob( $templatePath.'/*.php' ) as $template ) : ?>

			                    	<?php $templateName = basename($template, ".php"); ?>

				                    <?php if ( $templateName !== "index" ) { ?>
				                     		
				                     	<li>
				
											<a href="<?php echo $templatePath."?collection=".$templateName; ?>">
												
				                                <?php echo ucwords( str_replace( '-', ' ', $templateName ) ); ?>

				                            </a>

										</li>

									<?php }  ?>
			                        
			                    <?php endforeach; ?>

			                </ul>

			            </div>

		            </div>

		 		<?php } ?>

		 	</div>

			<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

			<?php 

	        	$commentPath = "inc/comments";

				if (count(glob($commentPath)) > "0" ) { 

			?>

		    	<div class="row">

		            <div class="col-sm-12">

		            	<h2><a href="<?php echo $commentPath; ?>">Comments</a></h2>

		            	<ul>

		                    <?php foreach( glob( $commentPath.'/*-examples' ) as $comment ) : ?>

		                    	<?php $commentName = basename($comment, ".php"); ?>

			                    <?php if ( $commentName !== "index" ) { ?>
			                     		
			                     	<li>
			
										<?php $commentName = str_replace( '-examples', '', $commentName); ?>

										<a href="<?php echo $commentPath."?type=".$commentName; ?>">

											<?php $commentName = str_replace( '-', ' ', $commentName); ?>
										
		                                	<?php echo ucwords( $commentName ); ?>

		                           	 	</a>

									</li>

								<?php }  ?>
		                        
		                    <?php endforeach; ?>

		                </ul>

		            </div>

		 		</div>

		 	<?php } ?>

		 	<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

	    </div>

   	</div>

<?php include_once('inc/global/footer.php'); ?>