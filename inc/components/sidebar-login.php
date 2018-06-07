<?php $molecule1 = file_get_contents('molecules/section-heading-red.php');  ?>
<?php $molecule2 = file_get_contents('molecules/login-form.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/section-heading-red.php' ?>

				<?php include 'molecules/login-form.php' ?>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?><?php echo htmlspecialchars($molecule2); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">

				<div class="component-rules">
					<p>Used on top-level pages to drive members to login.</p>
				</div>

			</div>

		</div>

	</div>

</div>