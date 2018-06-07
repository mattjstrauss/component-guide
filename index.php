<?php include_once('inc/global/head.php'); ?>

	<?php include_once('inc/global/tool-header.php'); ?>
	
	<div class="container">

		<div class="row">

            <div class="col-sm-12">

                <h1 class="content-label">Table Of Contents</h1>

            </div>

        </div>

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

 		<?php 

        	$modPath = "inc/modules";
			if (count(glob($modPath)) > "0" ) { 

		?>

	    	<div class="row">

	            <div class="col-sm-12">

	            	<h2>Modules</h2>

	            	<div class="copy-col-2">

		            	<ul>

		                	<?php $modPath = "inc/modules"; ?>

		                    <?php foreach( glob( $modPath.'/*.php' ) as $module ) : ?>

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

	            </div>

	 		</div>

	 	<?php } ?>

	 	<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

 		<?php 

        	$collectionPath = "inc/collections";
			if (count(glob($collectionPath)) > "0" ) { 

		?>

	    	<div class="row">

	            <div class="col-sm-12">

	            	<h2>Collections</h2>

	            	<div class="">

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

	 		</div>

	 	<?php } ?>
		
		<span class="spacer spacer-sm-3 spacer-md-1 spacer-lg-1"></span>

    </div>

<?php include_once('inc/global/footer.php'); ?>