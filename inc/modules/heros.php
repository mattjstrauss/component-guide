<div class="module-wrapper">

	<?php $molecule1 = file_get_contents('molecules/hero-large.php');  ?>

	<?php include 'molecules/hero-large.php'; ?>

	<div class="container">
		
		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<span class="spacer spacer-md-3"></span>

	</div>

	<div class="container">

		<?php $molecule2 = file_get_contents('molecules/hero-small.php');  ?>

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/hero-small.php'; ?>

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

					<p>The larger, full width hero is to be used on the index page and the four business line landing pages always in conjunction with the General content block, which should overlap it by 30px. On mobile the image will scale to a 1:1 ratio.</p>

					<p>The smaller hero that fits within the sites main container is to be used on all other pages always in conjunction with the general content block, which should sit 15px below it. On mobile this image will ideally fall to a 16:9 ratio.</p>
					
					<p>The "large" and "small" modifier classes are applyed to this section in order to dictate the size of the heros. Wether its full width or not depends on the wraping DOM elemenent. There are modifiers that can be placed on the wrapper that dictates the spacing and layering order of these elements. To add space to the top you need to add the modifier class called "pos-top" and add negative space to the element (move it underneath the preceding element) at the modifier "neg-top". To change the amount of space for each you can add corresponding sizes via a modifier by appending a dash and the size initials. For example pos-top or neg-top becomes pos-top-sm, pos-top-md, pos-top-lg or pos-top-xlg. To have the negative spacing swap out pos with neg. The same technique is being used for the layering by applying the modifier class "z-index". To change the order you at one dash for positive layering and two dashes for negative values. For positive values 1-3 you add "z-index-0, z-index-1, z-index-2, z-index-3". For negative 1-3 you add "z-index--1, z-index--2, z-index--3". For neutraul layering add "z-index-0".</p>

				</div>

			</div>

		</div>

	</div>

</div>