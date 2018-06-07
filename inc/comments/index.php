<?php $commentType = isset($_GET['type']) ? $_GET['type'] : null; ?>
<?php $currentPath = basename(__DIR__); ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	
        <div class="container">

            <div id="overview" class="example-block">

    		      <div class="row">

                    <div class="col-sm-9 col-sm-offset-3">

                        <h1 class="content-label">
                            <a href="/inc/<?php echo $currentPath; ?>">
                                <?php echo ucwords( str_replace( '-', ' ', $currentPath ) ); ?>
                            </a>
                            <?php if($commentType != "" ) : ?> > <?php echo ucwords( str_replace( '-', ' ', $commentType ) ); ?><?php endif; ?>
                        </h1>

                        <p class="content-overview">
                            This describes the content as a whole.
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div class="container">

            <?php if($commentType != "" ) : ?>

                <?php include_once "$commentType-examples/index.php"; ?>

            <?php else : ?>

                <?php include_once('../global/default-list.php'); ?>

            <?php endif; ?>

        </div>

<?php include_once('../global/footer.php'); ?>