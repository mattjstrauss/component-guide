<?php $molecule = file_get_contents('molecules/well-aside.php');  ?>

<div class="module-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12 col-md-4">

				<?php include 'molecules/well-aside.php' ?>

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
					<p>Used in conjunction with content to highlight a task or initiative.</p>

					<p><em>Variants: 1-3 Call to Action buttons possible</em></p>
				</div>

			</div>

		</div>

	</div>

</div>