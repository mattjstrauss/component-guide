<?php $molecule = file_get_contents('molecules/main-navigation.php');  ?>

<div class="module-wrapper">

	<?php include 'molecules/main-navigation.php'; ?>

	<div class="container">
		
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
					
					<p></p>

				</div>

			</div>

		</div>

	</div>
		
</div>