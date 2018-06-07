<div class="component-wrapper">

	<div class="container">

		<?php $molecule1 = file_get_contents('molecules/form-large.php');  ?>

		<div class="row">
			<div class="col-sm-10 col-md-8">
				<?php include 'molecules/form-large.php'; ?>
			</div>
		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<?php $molecule2 = file_get_contents('molecules/form-small.php');  ?>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-6 col-md-4">
				<?php include 'molecules/form-small.php'; ?>
			</div>
		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">
				
				<div class="component-rules">
					
					<p>The first is a larger version to be used in general content for more comprehensive tasks. The second can be used as a support element for smaller tasks. These are ultimately suggestions, each form will have to be tailored to its unique task.</p>

				</div>

			</div>

		</div>

	</div>

</div>