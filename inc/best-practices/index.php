<?php $bestPracticesPath = isset($_GET['best-practices']) ? $_GET['best-practices'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	
    <div class="container">

		<div class="row">

            <div class="col-sm-12">

                <h1 class="module-label"><?php echo ucwords( str_replace( '-', ' ', $bestPracticesPath ) ); ?></h1>

            </div>

        </div>

    </div>

    <div class="template-wrapper">

        <?php include_once "$bestPracticesPath.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>