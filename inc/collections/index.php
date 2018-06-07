<?php $collectionFile = isset($_GET['collection']) ? $_GET['collection'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>

	<div class="container">

		<div class="row">

            <div class="col-sm-12">

                <h1 class="module-label"><?php echo ucwords( str_replace( '-', ' ', $collectionFile ) ); ?></h1>

            </div>

        </div>

    </div>
	


    <div class="module-wrapper">

        <?php include_once "$collectionFile.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>