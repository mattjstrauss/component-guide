<?php 

	if (count(glob('*-examples')) > "0" ) { 

?>

<div class="row">

    <div class="col-sm-9 col-sm-offset-3">

    	<ul>

            <?php foreach( glob( '*-examples' ) as $example ) : ?>

            	<?php $exampleName = basename($example, ".php"); ?>
                 		
             	<li>

					<?php $exampleName = str_replace( '-examples', '', $exampleName); ?>

					<a href="<?php echo "?type=".$exampleName; ?>">

						<?php $exampleName = str_replace( '-', ' ', $exampleName); ?>
					
                    	<?php echo ucwords( $exampleName ); ?>

               	 	</a>

				</li>
                
            <?php endforeach; ?>

        </ul>

    </div>

</div>

<?php } ?>