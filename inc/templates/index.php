<?php $templateFile = isset($_GET['template']) ? $_GET['template'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	


    <div class="template-wrapper">

        <?php include_once "$templateFile.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>