<div class="module-wrapper">

	<div class="container">

		<?php $molecule1 = file_get_contents('molecules/section-heading-red.php');  ?>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-red.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-blue.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-green.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-gold.php' ?>

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

		<?php $molecule2 = file_get_contents('molecules/section-heading-link-red.php');  ?>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-link-red.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-link-blue.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-link-green.php' ?>

			</div>

		</div>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/section-heading-link-gold.php' ?>

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
				
				<div class="module-rules">
					
					<p>Four variants are available for title bars. Each is used to indicate where in the four branches of the site you are. They are availble to use with supportive links.</p>

					<p>To change the headings background color and icon color, place the color (red, blue, green or gold) as a class on the .section-heading element. To include a link, no modifiers are necessary. Simply include the link markup in the example.</p>

				</div>	

			</div>

		</div>

	</div>

</div>