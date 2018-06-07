<?php $molecule = file_get_contents('molecules/section-heading-red.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/section-heading-red.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/section-heading-blue.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/section-heading-green.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/section-heading-gold.php' ?>

			</div>

		</div>

		<span class="spacer"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">

				<div class="component-rules">
					<p>Four variants are available for title bars. Each is used to indicate where in the four branches of the site you are.</p>
				</div>

			</div>

		</div>

	</div>

</div>