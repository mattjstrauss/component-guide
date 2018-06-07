<?php $molecule = file_get_contents('molecules/card-inset-border.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="flex-wrapper flex-columns">

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-inset-border.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-inset-border.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-inset-border.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-inset-border.php'; ?>

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
				
				<div class="component-rules">
					
					<p>Used toward the bottom of any page to cross-link or suggest related content.</p>

					<p>This component is based on a element called a "card". Modifier classes are applyed to the card element to apply certain styles. In this instance the "small" class is used to adjust the heading (h2) size and "inset-border" to apply the gray bar on the right side of the elements.</p>

				</div>

			</div>

		</div>

	</div>

</div>