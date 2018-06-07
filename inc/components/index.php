<?php $componentFile = isset($_GET['component']) ? $_GET['component'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	
	<div class="container">

		<div class="row">

            <div class="col-sm-12">

                <h1 class="component-label"><?php echo ucwords( str_replace( '-', ' ', $componentFile ) ); ?></h1>

            </div>

        </div>

    </div>

    <div class="component-wrapper">

        <?php include_once "$componentFile.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>