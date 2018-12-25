<?php

$year = 2019;
$place = 'Bratislava';

$count = count($this->items);

for ($i=0; $i<$count/2; $i++) :
	if (($i%4) == 0) :
?>
		<div class="page clearfix">
<?php 
	endif;
?>

	<div class="column">
		<div class="verse <?php echo ($this->items[$count-$i-1]->count > 420)?'long':''; ?>" id="verse_<?php echo $count-$i-1; ?>">
			<div class="year"><?php echo $year; ?></div>
	
			<div class="text lang1">
				<?php echo $this->items[$count-$i-1]->sk_text; ?>
			</div>
			
			<div class="coordinates">
				 <?php echo $this->items[$count-$i-1]->sk_coord; ?> 
			</div>
			
			<div class="text lang1">
				<?php echo $this->items[$count-$i-1]->hu_text; ?>
			</div>
			
				<?php if ( $this->items[$count-$i-1]->hu_coord != $this->items[$count-$i-1]->sk_coord) :?>
					<div class="coordinates">
						<?php echo $this->items[$count-$i-1]->hu_coord; ?>			
					</div>
				<?php endif; ?>
						
			<div class="place"><?php echo $place; ?></div>
		</div>

		<?php if ($this->items[$i]->count > 0) :?>
			<div class="verse <?php echo ($this->items[$i]->count < 200)?'short':''; ?>" id="verse_<?php echo $i; ?>">
				<div class="year"><?php echo $year; ?></div>
		
				<div class="text lang1">
					<?php echo $this->items[$i]->sk_text; ?>
				</div>
				
				<div class="coordinates">
					 <?php echo $this->items[$i]->sk_coord; ?> 
				</div>
				
				<div class="text lang1">
					<?php echo $this->items[$i]->hu_text; ?>
				</div>
				
				<?php if ( $this->items[$i]->hu_coord != $this->items[$i]->sk_coord) :?>
					<div class="coordinates">
						<?php echo $this->items[$i]->hu_coord; ?>			
					</div>
				<?php endif; ?>
				
				<div class="place"><?php echo $place; ?></div>
		
			</div>
		<?php endif;?>
		
	</div>
<?php 
	if (($i%4) == 3) :
?>
		</div>
<?php 
	endif;
?>
<?php	
endfor;
?>
