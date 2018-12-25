<?php
// Protect from unauthorized access
defined('_JEXEC') or die();

class ScripturebaseModelVersecards extends FOFModel
{
	
	private function attachOrfanCharacters($text)
	{
		$orphans = array('a', 'A', 'v', 'V', 'k', 'K', 'o', 'O', 'U', 'u', 'S', 's', 'z', 'Z', 'i', 'I');
		foreach ($orphans as $o) {
			$text = str_replace(" $o ", " $o&nbsp;", $text);
			$text = str_replace("&nbsp;$o ", "&nbsp;$o&nbsp;", $text);
		}
		return $text;
	}

	public function &getItemList($overrideLimits=false, $group='')
	{
		$rows = file('verses.csv');
		$list = array();
		
		$c = count ($rows);
		$j = 0;
		
		if ($c%8 !== 0) {
			for ($i=$c; $i<(floor($c/8)+1)*8 ; $i++) {
				$versecard = new stdClass();
				$versecard->sk_text = "";
				$versecard->sk_coord = "";
				$versecard->hu_text = "";
				$versecard->hu_coord = "";
				$versecard->count = 0;
				$list[$j] = $versecard;
				$j++;				
			}
		}			
		
		foreach ( $rows as $row ) {
			$parts = explode('#',$row);
			$versecard = new stdClass();
			$versecard->sk_text = trim( $parts[1] );
			$versecard->sk_coord = trim($parts[2]);
			$versecard->hu_text = trim( $parts[3] );
			$versecard->hu_coord = trim($parts[4]);
			$versecard->count = strlen($versecard->sk_text) + strlen($versecard->hu_text); 
			$versecard->sk_text = $this->attachOrfanCharacters( $versecard->sk_text );
			$versecard->hu_text = $this->attachOrfanCharacters( $versecard->hu_text );
				
			$list[$j] = $versecard;
			$j++;
		}

		usort($list, function($a, $b)
		{
			if ($a->count < $b->count) {
				return -1;
			} elseif ($a->count > $b->count) {
				return 1;
			} else {
				return 0;
			}
				
		});		
		
		return $list;
	}
	
	public function getTotal()
	{
		return 1;
	}
}
