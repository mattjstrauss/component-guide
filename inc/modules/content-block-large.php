<?php $molecule = file_get_contents('molecules/card.php');  ?>

<div class="module-wrapper">

	<div class="container">

		<div class="row">

			<div class="flex-wrapper flex-columns">

				<div class="col-sm-6 flex-item">

					<?php include 'molecules/card.php'; ?>

				</div>

				<div class="col-sm-6 flex-item">

					<?php include 'molecules/card.php'; ?>

				</div>

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
					
					<p>It should not be used more than twice on a particular page and always above all support modules.</p>

				</div>

			</div>

		</div>

	</div>

</div>