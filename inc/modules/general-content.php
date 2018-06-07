<?php $molecule = file_get_contents('molecules/card-general-content.php');  ?>

<div class="module-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-8">

				<?php include 'molecules/card-general-content.php'; ?>

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
					<p>Used on any landing page to display introductory content.</p>

					<p><em>Varients: 1-3 Call to Action buttons possible</em></p>

					<p>When including buttons there are several varients using modifier classes. The default class to apply to the link is "btn". This will give you the basic button styles of a plain grey button. By adding "btn-default" it will give you a outlined button with a white background and red background on hover. By adding "btn-default" and "alt" it will style the button with a outline, red background and a white background on hover. By adding the "btn-ext" class and the arrow icon markup will give you the wider extended button with an arrow on the right. By adding the "no-styles" and specifying the color by class such as adding "red" it will give you the "inline button" style look with a caret to the right.</p>
					
				</div>

			</div>

		</div>

	</div>

</div>