<?php $moduleFile = isset($_GET['module']) ? $_GET['module'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	
	<div class="container">

		<div class="row">

            <div class="col-sm-12">

                <h1 class="module-label"><?php echo ucwords( str_replace( '-', ' ', $moduleFile ) ); ?></h1>

            </div>

        </div>

    </div>

    <div class="module-wrapper">

        <?php include_once "$moduleFile.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>