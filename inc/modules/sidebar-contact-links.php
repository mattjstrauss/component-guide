<?php $molecule = file_get_contents('molecules/well-quick-links-actions.php');  ?>

<div class="module-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/well-quick-links-actions.php' ?>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule); ?></code></pre>
			</div>
		</div>
		
		<div class="row">

			<div class="col-sm-12">

				<div class="module-rules">
					<p>Used to provide specific contact information. <em>Variants: Locator, Download, Phone Number, Live Chat.</em></p>
				</div>

			</div>

		</div>

	</div>

</div>