<?php $molecule1 = file_get_contents('molecules/table-marks.php');  ?>
<?php $molecule2 = file_get_contents('molecules/table-text.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/table-marks.php'; ?>

			</div>
			
		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/table-text.php'; ?>

			</div>
			
		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule2); ?></code></pre>
			</div>
		</div>


		<div class="row">

			<div class="col-sm-12">

				<div class="component-rules">

					<p>May be used on any page to highlight or compare important information categorically. On mobile devices the table readjust to a vertical orientation and collapses content into a drawer system.</p>

					<p><em>Variants: Title container color is set to red, but may be adjusted to suit content</em></p>
				</div>

			</div>

		</div>

	</div>

</div>