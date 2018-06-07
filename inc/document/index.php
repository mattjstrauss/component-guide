<?php $languageFile = isset($_GET['template']) ? $_GET['languages'] : null; ?>

<?php include_once('../global/head.php'); ?>

	<?php include_once('../global/tool-header.php'); ?>
	


    <div class="template-wrapper">

        <?php include_once "$languageFile.php"; ?>

    </div>

<?php include_once('../global/footer.php'); ?>