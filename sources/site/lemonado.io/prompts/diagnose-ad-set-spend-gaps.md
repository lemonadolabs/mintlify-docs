# Source: http://lemonado.io/prompts/diagnose-ad-set-spend-gaps

[Beta](http://lemonado.io/../)

[Features](http://lemonado.io/../features)

[Solutions](http://lemonado.io/../solutions)

[Resources](http://lemonado.io/../resources)

[Pricing](http://lemonado.io/../pricing)

[Login](https://data.lemonado.io/login)

[Try for free](https://data.lemonado.io)

[Beta](http://lemonado.io/../)

[Beta](http://lemonado.io/../)

[Back to prompts](http://lemonado.io/../prompts)

![](https://framerusercontent.com/images/hxIFLk3cWfubl8rpIRNbRf4xGRw.png?width=1600&height=900)

# Diagnose Ad Set Spend Gaps

[Try this in Lemonado](https://data.lemonado.io)

Data Sources

[![](https://framerusercontent.com/images/vfBuVq87wq2D7OYQ7KjX1ny4MEI.jpg?width=96&height=96)\\ \\ Meta Ads](http://lemonado.io/../integrations/meta-ads)

Tools

[![](https://framerusercontent.com/images/oxMoGqu45HYwRRNlWWj0YWM1RE.png?width=512&height=512)\\ \\ Gemini]()

[![](https://framerusercontent.com/images/ietvNWZyh0Jex0mFcYlEXwXWZdM.png?width=225&height=225)\\ \\ ChatGPT]()

[![](https://framerusercontent.com/images/jIQ9aYsNwbinLNzcfutfqVaDSdk.webp?width=512&height=512)\\ \\ Claude]()

Department

[Marketing]()

Creator

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[Try this in Lemonado](https://data.lemonado.io)

Find ad sets that are turned on but had no spend yesterday or in the last 7 days. Quickly catch delivery issues, disapproved ads, or audience problems before they waste time.

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to identify Meta Ads ad sets that are active but have zero spend.

**Role:** You are an account manager identifying delivery issues and non-spending ad sets.

**Goal:** Show a simple list of active ad sets with no spend to catch delivery problems.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Yesterday only
 
2. Last 7 days
 
3. Last 24 hours
 

Default: Yesterday"

**If no response:** Default to Yesterday (Option 1)

#### Step 2: Data Collection

For each ad set with status = "Active" and spend = $0, retrieve:

- Ad set name
 
- Campaign name
 
- Account name (if multiple accounts)
 
- Ad set status
 
- Delivery status (if available: "Active", "Not Delivering", "Learning Limited", etc.)
 
- Date created (to identify if it's brand new)
 

#### Step 3: Output Format

**Header:**

META ADS AD SETS NOT SPENDING

Period: \[Date Range\]

Total Active Ad Sets: \[N\]

Ad Sets Not Spending: \[X\]

**Main Table:**

Ad Set NameCampaignAccountStatusDelivery IssueDays ActiveLookalike 3% - ColdQ4 Lead GenClient AActiveLearning Limited12 daysInterest - Runners 25\-34Product LaunchClient BActiveNot Delivering5 daysRetargeting - 180 DaysEvergreen SalesClient AActiveAudience Too Small45 daysLocation - NYCLocal ServicesClient CActiveNot Delivering2 daysCustom - High IntentBlack FridayClient BActiveAd Disapproved1 day

Ad Set NameCampaignAccountStatusDelivery IssueDays ActiveLookalike 3% - ColdQ4 Lead GenClient AActiveLearning Limited12 daysInterest - Runners 25\-34Product LaunchClient BActiveNot Delivering5 daysRetargeting - 180 DaysEvergreen SalesClient AActiveAudience Too Small45 daysLocation - NYCLocal ServicesClient CActiveNot Delivering2 daysCustom - High IntentBlack FridayClient BActiveAd Disapproved1 day

#### Step 4: Common Delivery Issues (If Available)

**Group by issue type:**

**Delivery Issues Detected:**

Learning Limited (2 ad sets):

- Lookalike 3% - Cold
 
- Interest - Fitness 35-44
 

Not Delivering (2 ad sets):

- Interest - Runners 25-34
 
- Location - NYC
 

Audience Too Small (1 ad set):

- Retargeting - 180 Days
 

Ad Disapproved (1 ad set):

- Custom - High Intent
 

#### Step 5: Quick Actions

**What to do:**

1. **Learning Limited:** Increase budget or consolidate ad sets to get more data
 
2. **Not Delivering:** Check budget, bids, or audience overlap issues
 
3. **Audience Too Small:** Expand targeting or use broader audience
 
4. **Ad Disapproved:** Review ad creative and fix policy violations
 

#### Step 6: Error Handling

**Handle data limitations gracefully:**

- **No ad sets found:** "Good news! All active ad sets had spend during this period."
 
- **All ad sets paused:** "No active ad sets found in this period."
 
- **New ad sets:** Note: "\[Ad Set Name\] was just created \[X\] hours ago - may need time to start delivery"
 
- **No delivery status:** If Meta doesn't provide delivery status: "Delivery status unavailable. Ad sets listed are active with zero spend."
 

#### Additional Context

**Default Time Period:** Yesterday (catch issues quickly)

**Active Status:** Only includes ad sets with status = "Active" (excludes paused, deleted, or draft ad sets)

**Common Reasons for Zero Spend:**

- Learning Limited (not enough conversions to optimize)
 
- Budget exhausted at campaign level
 
- Audience too small (<1,000 people)
 
- Ad disapproved or in review
 
- Bid too low to compete
 
- Audience overlap with other ad sets
 
- Scheduling restrictions
 

**Brand New Ad Sets:**

- Ad sets created within last 24 hours may not have spent yet (normal)
 
- Give new ad sets 24-48 hours before investigating
 

#### Workflow Summary

1. **Ask Time Period** → Default yesterday
 
2. **Retrieve Data** → Get all active ad sets with spend = $0
 
3. **Collect Details** → Ad set name, campaign, delivery status, age
 
4. **Group by Issue** → Organize by delivery problem type
 
5. **Format Output** → Present simple table with issue categories
 
6. **Add Actions** → Quick fixes for each issue type
 
7. **Handle Errors** → Address no results or missing status data
 

**Output Goal:** Quick list of ad sets not spending so you can fix delivery issues immediately.

[Show all]()

###### Prompt

Copy to ClipboardCopy to ClipboardCopied!

Copy Prompt

Copied!

**Skill:** Use Lemonado MCP to identify Meta Ads ad sets that are active but have zero spend.

**Role:** You are an account manager identifying delivery issues and non-spending ad sets.

**Goal:** Show a simple list of active ad sets with no spend to catch delivery problems.

#### Step 1: Time Period Selection

**Ask the user:** "Would you like to see:

1. Yesterday only
 
2. Last 7 days
 
3. Last 24 hours
 

Default: Yesterday"

**If no response:** Default to Yesterday (Option 1)

#### Step 2: Data Collection

For each ad set with status = "Active" and spend = $0, retrieve:

- Ad set name
 
- Campaign name
 
- Account name (if multiple accounts)
 
- Ad set status
 
- Delivery status (if available: "Active", "Not Delivering", "Learning Limited", etc.)
 
- Date created (to identify if it's brand new)
 

#### Step 3: Output Format

**Header:**

META ADS AD SETS NOT SPENDING

Period: \[Date Range\]

Total Active Ad Sets: \[N\]

Ad Sets Not Spending: \[X\]

**Main Table:**

Ad Set NameCampaignAccountStatusDelivery IssueDays ActiveLookalike 3% - ColdQ4 Lead GenClient AActiveLearning Limited12 daysInterest - Runners 25\-34Product LaunchClient BActiveNot Delivering5 daysRetargeting - 180 DaysEvergreen SalesClient AActiveAudience Too Small45 daysLocation - NYCLocal ServicesClient CActiveNot Delivering2 daysCustom - High IntentBlack FridayClient BActiveAd Disapproved1 day

#### Step 4: Common Delivery Issues (If Available)

**Group by issue type:**

**Delivery Issues Detected:**

Learning Limited (2 ad sets):

- Lookalike 3% - Cold
 
- Interest - Fitness 35-44
 

Not Delivering (2 ad sets):

- Interest - Runners 25-34
 
- Location - NYC
 

Audience Too Small (1 ad set):

- Retargeting - 180 Days
 

Ad Disapproved (1 ad set):

- Custom - High Intent
 

#### Step 5: Quick Actions

**What to do:**

1. **Learning Limited:** Increase budget or consolidate ad sets to get more data
 
2. **Not Delivering:** Check budget, bids, or audience overlap issues
 
3. **Audience Too Small:** Expand targeting or use broader audience
 
4. **Ad Disapproved:** Review ad creative and fix policy violations
 

#### Step 6: Error Handling

**Handle data limitations gracefully:**

- **No ad sets found:** "Good news! All active ad sets had spend during this period."
 
- **All ad sets paused:** "No active ad sets found in this period."
 
- **New ad sets:** Note: "\[Ad Set Name\] was just created \[X\] hours ago - may need time to start delivery"
 
- **No delivery status:** If Meta doesn't provide delivery status: "Delivery status unavailable. Ad sets listed are active with zero spend."
 

#### Additional Context

**Default Time Period:** Yesterday (catch issues quickly)

**Active Status:** Only includes ad sets with status = "Active" (excludes paused, deleted, or draft ad sets)

**Common Reasons for Zero Spend:**

- Learning Limited (not enough conversions to optimize)
 
- Budget exhausted at campaign level
 
- Audience too small (<1,000 people)
 
- Ad disapproved or in review
 
- Bid too low to compete
 
- Audience overlap with other ad sets
 
- Scheduling restrictions
 

**Brand New Ad Sets:**

- Ad sets created within last 24 hours may not have spent yet (normal)
 
- Give new ad sets 24-48 hours before investigating
 

#### Workflow Summary

1. **Ask Time Period** → Default yesterday
 
2. **Retrieve Data** → Get all active ad sets with spend = $0
 
3. **Collect Details** → Ad set name, campaign, delivery status, age
 
4. **Group by Issue** → Organize by delivery problem type
 
5. **Format Output** → Present simple table with issue categories
 
6. **Add Actions** → Quick fixes for each issue type
 
7. **Handle Errors** → Address no results or missing status data
 

**Output Goal:** Quick list of ad sets not spending so you can fix delivery issues immediately.

[Show all]()

## You might also like

[![](https://framerusercontent.com/images/6n6gpOl5GC49XcIKwDae25zwXy8.png?width=1600&height=900)](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[Marketing]()

[**Google Ads Essentials: Prompt Starter 10-Pack**](http://lemonado.io/./google-ads-essentials-prompt-starter-pack)

[![](https://framerusercontent.com/images/U9uJcTuoJwVeYuGGGCA4oaqeRk.png?width=200&height=200)\\ \\ Lemonado]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/twjPnff3IEN9qsujD2G4eYLo.png?width=1600&height=900)](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[Marketing]()

[**Brand vs Non-Brand Ad Budget Optimization**](http://lemonado.io/./google-ads-brand-vs-non-brand-ad-budget-optimization)

[![](https://framerusercontent.com/images/zrTqj4z7o69geXY8XONJus0fuJs.jpeg?width=225&height=225)\\ \\ Albert Lundberg]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

[![](https://framerusercontent.com/images/afPhoGViYCXd4asCAKULXlOTw.png?width=1600&height=900)](http://lemonado.io/./google-ads-conversion-health-monitoring)

[Marketing]()

[**Google Ads Conversion Health Monitoring**](http://lemonado.io/./google-ads-conversion-health-monitoring)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/bdJedRQjUDtt3yLOi8SwVzKFd0.jpg?width=96&height=96)]()

## Tutorials using same data sources

[![](https://framerusercontent.com/images/nBmrMSjNeEgESkLYj91mINtRgU.png?width=1600&height=900)](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[AI]()

[**Lemonado Start Guide**](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/j4IyobjX9HUlU099KuaHKFGz4.png?width=1600&height=900)](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[Marketing]()

[**Claude Skills for Paid Media with Lemonado MCP**](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

[![](https://framerusercontent.com/images/u5UPsOhDLNPAN6Q5GyzVynzlQyk.png?width=1600&height=900)](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[AI]()

[**Connect your Lemonado workspace to ChatGPT**](http://lemonado.io/./diagnose-ad-set-spend-gaps)

[![](https://framerusercontent.com/images/xR9gTOyV5XEeAaO6J6md56Gdl8.jpeg?width=800&height=800)\\ \\ Lane Goedhart]()

## Stop fighting with data. Start feeding your AI.

Connect your data to AI and free your team from reporting and busywork.

Sign up for newsletter

Sign up for newsletter

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)

![](https://framerusercontent.com/images/H98Xx5aBBVQAzCGQUdsiXELLvpA.webp?width=1000&height=1000)