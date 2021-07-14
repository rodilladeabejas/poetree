<template>
<div class="change">
	<Letting-Go
		requires="[selfAcceptance, acceptingDiscomfort]"
		@when-hestitating="dontSettleForLess"
		/>
	<Ask-For-Help
	   requires="humility"
	   extras="[remindersA, support]"
	   on-received="gratitude"
	 />
	<Walking-New-Path
		requires="[feelingSafe, courage, trust]"
		extras="[remindersB, signs]"
		@when-discomfort="navigateWithGrace"
		@when-growth="integrateChange"
	/>
</div>
</template>
<script>
 import * from '@/rio/to-unlearn/lies-i-was-told-about-myself'

 export default {
 	components: {
	  'Ask-For-Help': import from  '/People/Connections/Ask-For-Help.life',
	  'Letting-Go': import from '/Timelines/Past/What-I-Thought-Would-Be-My-Direction',
	  'Walking-New-Path': import from 'Places/New/Undefined.tobe'
	},
	props: {
		signs: {
			from: 'spirits',
			type: 'universe'
		},
		support: {
		  from: 'people-i-trust',
		  type: 'love'
		}
	},
	data: {
		remindersA: 'i don\'t have to do everything on my own',
		reminderB: ['what would i do if i knew i was being looked after', 'this journey has been in the making for way longer', 'soul cannot afford to not live this dream out'],
		acceptingDiscomfort: {
			within: 'acceptance',
			thereIs: 'space ',
			to: 'search elsewhere'
		},
		humility: ['put ego aside', 'needing help is not weakness'],
		feelingSafe: ['safe within', 'privileged that others don\t depend on me', 'grounded to move forward'],
		courage: 'moving forward even in fear',
		trust: ['believing that i got what it takes to do this', 'belief that the unknown can hold happiness, fulfillment', 'believe that i\'m looked after'],
		selfAcceptance: 'my path lies elsewhere, and that\'s more than okay'
	},
	methods: {
	  gratitude() {
	  	return {
			  consistency: 'as often as possible',
			  amount: 'from-here-to-the-moon'*1000
			}
	  },
	  dontSettleForLess(i) {
	    if(i.hestitate) {
				return { question: 'What has restriction felt like?', remember: 'your dreams'}
			} else if(i.doubtMyself) {
				return { reminder: 'you didn\'t fail for not making it on this path'}
			}
	  },
	  navigateWithGrace(feeling) {
	    if(feeling.uncomfortable) {
				return {
					compassion: 200,
					thought:'discomfort is a sign of expansion',
					held: 'you\'re growing into yourself'
				}
			} else if(feeling.afraid) {
			   return {
					 futureHugs: 888,
					 thought: 'this is brand new territory, its ok',
					  held: 'trust that this will turn out well, and if not, you\'re not alone' }
			}
	  },
	  integrateChange(becoming)
	  {
	     for(let i = now;  i < becoming.changes.length; i++) {
		    i.embraceTruth()
		    i.embraceHealing()
			  i.embraceMystery()
				i.embraceTimelessness()
				i.holdSpaceForContinousChange()
		 	}
	  }
	}
 }
</script>
<style>
  .change {
  	trust: 100%;
	boundaries: 1px solid #sturdy-yet-flexible;
	width: spacious;
  }
  .change:before {
  	feet: grounded;
	led-by: fire,
	flowing: river,
	thoughtful: wind
  }
</style>
