<template>
  <Box>
    <h1 class="h1-inline">Chrysler Capital: Acquisition Fee Waivers</h1>

    <h2>
      UX Designer responsible for coordinating between the business team and development team.
    </h2>

    <p>
      Chrysler Capital, a collaboration between the automotive manufacturing corporation Stellantis
      and the auto lending company Santander Consumer USA, needed to improve their method of
      communicating which cars to provide discounts to each month.
    </p>
  </Box>

  <Box>
    <h2>What's an Acquisition Fee Waiver?</h2>
    <p>
      "Acquisition fee waiver" is a fancy way word for a coupon to convince dealerships to choose
      Chrysler Capital over other auto lenders.
    </p>
    <img src="./images/01_car-and-coupon.svg" alt="" class="w-4/5" />
  </Box>

  <Box>
    <h2>
      Because Chrysler Capital and Stellantis are two separate companies, they must communicate
      which vehicles in which regions need a coupon (aquisition fee waiver) to stay competitive with
      other lending companies.
    </h2>
  </Box>

  <Box>
    <h2>
      The current process includes mailing an excel document back and forth, leading to… less than
      accurate results…
    </h2>
    <img src="./images/02_pong.svg" alt="" class="w-4/5" />
  </Box>

  <Box>
    <img src="./images/03-lender-dealer-customer-relationship.svg" alt="" class="w-4/5" />
  </Box>

  <Box>
    <img src="./images/04-rbm-map.svg" alt="" class="w-4/5" />
    <h2>Who will use the new software?</h2>

    <p>
      8 Regional Brand Managers, who are in charge of understanding the market tendencies in their
      area, will create and excel sheet with 500+ vehicles each month that will get sent back and
      forth with Stellantis.
    </p>
  </Box>

  <Box>
    <h2>But what could be so bad about one spreadsheet O_O</h2>

    <img src="./images/05-acq-fee-waiver-spreadsheet.PNG" alt="" class="w-4/5" />

    <h2>What&apos;s wrong with the current tool?</h2>

    <ul>
      <li>No hierarchy&comma; increasing cognitive load</li>
      <li>Monthly mistakes that persist through attempts to fix the spreadsheet</li>
      <li>Searching for vehicles</li>
      <li>Expansive spreadsheet requiring vertical AND horizontal scrolling</li>
    </ul>

    <h2>What was the goal for the project?</h2>

    <ul>
      <li>Reduce overall time for inputting acquisition fee waivers each month</li>
      <li>Reduce errors from cognitive load and information density</li>
      <li>Streamline error correction for Acquisition Fee Waivers</li>
    </ul>
  </Box>

  <Box>
    <h2 class="white-text">
      Our new tool would use a server in the middle to check for mistakes before they get sent to
      the other team
    </h2>

    <title>Excel Pong, now with 100% more servers</title>
    <desc
      >A Pong-like game screen with Stellantis's paddle on the left side and Chrysler Capital's
      paddle on the other with a server in the middle bouncing two separate excel documents with the
      paddles.</desc
    >
  </Box>

  <Box>
    <h2>Understanding the Domain by Interviewing the Regional Brand Managers</h2>

    <p>
      The UX researcher and I interviewed 5 regional brand managers and learned that each would go
      through these steps&colon;
    </p>

    <ol>
      <li>Find the vehicles that had Acquisition Fee Waivers last month</li>
      <li>Mark them to reference as a group later on</li>
      <li>Search for any additional vehicles requiring waivers</li>
      <li>Adjust Acquisition Fees for the selected vehicles while referencing 5 documents</li>
    </ol>
  </Box>

  <Box>
    <h2>Key Features to Consider for Designs</h2>

    <p>Based on these findings&colon;</p>

    <ul>
      <li>Software needs to be able to easily add current waivers to the next month</li>
      <li>
        Users search for vehicles and add them to a group as step one, then adjust acquisition fee
        waivers for the group as step two
      </li>
      <li>
        Personal insight&colon; adding the ability to mass update the waivers could save a lot of
        time
      </li>
    </ul>

    <h2>Considerations Raised By Business SMEs</h2>

    <ul>
      <li>
        Ability to switch regions so that one Regional Brand Manager can take over for another
      </li>
      <li>Some vehicles will have different names but the same identification code</li>
      <li>Reason for waiving acquisition fee</li>
      <li>Reason why acquisition fee waiver was rejected</li>
    </ul>
  </Box>

  <Box>
    <h2>What might the prototype look like?</h2>

    <h3>First off&comma; the approval flow&colon;</h3>

    <h4>1&rpar; In Progress</h4>

    <img src="./images/06-in-progress.jpg" alt="" class="w-4/5" />

    <h4>2&rpar; Pending Approval</h4>

    <img src="./images/07-pending-approval.jpg" alt="" class="w-4/5" />

    <h4>3&rpar; Manager Approved</h4>

    <img src="./images/08-manager-approved.jpg" alt="" class="w-4/5" />

    <div class="flex">
      <img src="./images/09-search-icon.svg" alt="" class="" />
      <h2>Search</h2>
    </div>

    <h3>
      Vehicles with acquisition fee waivers from the previous month often receive waivers this month
      as well&comma; so I added the ability to quickly select those vehicles and add them to the
      cart.
    </h3>

    <img src="./images/10-last-months-waivers.jpg" alt="" class="w-4/5" />

    <h3>
      Now the vehicles have been added and sorted by make and model with filters at the top for easy
      searching
    </h3>

    <img src="./images/11-vehicles-added.png" alt="" class="w-4/5" />

    <div class="flex">
      <img src="./images/12-cart-icon.svg" alt="" class="" />
      <h2>Vehicle Cart</h2>
    </div>

    <h3>
      Regional Brand Managers can update each vehicle&apos;s Acquisition Fee Waivers in one
      location&comma; using the same conceptual model as the shopping cart as storefront websites
    </h3>

    <img src="./images/13-vehicle-cart.jpg" alt="" class="w-4/5" />

    <h2>Mass Update</h2>

    <h3>
      By clicking the checkboxes on the left&comma; the mass update feature is activated. A user can
      either remove a group of vehicles from the cart or enter a value on the top row and update
      all. Updated waivers are outlined in blue.
    </h3>

    <img src="./images/14-mass-update.jpg" alt="" class="w-4/5" />

    <h2>Mananger Review</h2>
    <h3>
      Managers can view all vehicles with adjusted Acquisition Fees, but cannot edit them. By
      clicking the note icon on the left, they can reject individual waivers&comma; which then
      become highlighted in red. Rejected waivers will be returned to Regional Brand Managers to get
      fixed.
    </h3>

    <img src="./images/15-rejected-waivers.jpg" alt="" class="w-4/5" />
  </Box>

  <Box>
    <h3>
      With the original prototype done&comma; it was time to see how it worked with the Regional
      Brand Managers
    </h3>

    <h2>Takeaways from Usability Tests</h2>

    <ul>
      <li>System feedback is essential when adding and removing vehicles</li>
      <li>
        Users would like to be able to download an excel file once acquisition fee waivers have been
        approved
      </li>
      <li>
        Users needed to understand that the Search/Vehicle Cart button is a toggle, and the
        iconography needs to be consistent
      </li>
      <li>
        Users would like to have a list of the rejected acquisition fee waivers to fix them quickly
      </li>
      <li>More specificity in button names</li>
    </ul>

    <h2>Considerations Raised Developers About Wireframes</h2>

    <ul>
      <li>
        Clicking the checkbox and clicking Add to Cart takes two steps when only one is needed
      </li>
      <li>System Feedback message style deviates from the currently implemented design</li>
      <li>Notes icon deviates from the current system</li>
    </ul>
  </Box>

  <Box>
    <h2>Key Changes in the Final Prototype</h2>

    <h2>Clear Action Confirmation Messaging</h2>

    <img src="./images/16-system-notifications.jpg" alt="" class="w-4/5" />

    <h2>Search&sol;Vehicle Cart Toggle</h2>
    <h3>
      The &quot;Search&quot; and &quot;Vehicle Cart&quot; toggle have been combined to show their
      relationship. The toggle lives in a bar that stays on the bottom of the screen on scroll.
    </h3>

    <img src="./images/17-page-toggle.jpg" alt="" class="w-4/5" />

    <h2>Checkbox Adds to Cart</h2>
    <h3>
      Clicking the checkbox next to a vehicle or above a vehicle model will automatically add that
      vehicle to the cart without needing an &quot;Add To Cart&quot; button
    </h3>

    <img src="./images/18-checkbox-added-to-cart.jpg" alt="" class="w-4/5" />

    <h2>Rejected Vehicles are Shown at Top of List</h2>
    <h3>
      When a manager rejects vehicles elected for acquisition fee waivers&comma; they get returned
      to the Regional Brand Manager for revision. Those rejected vehicles are collected in a list at
      the top to avoid requireing searching through hundreds of rows of vehicles.
    </h3>

    <img src="./images/19-rejected-waivers.jpg" alt="" class="w-4/5" />
  </Box>

  <Box>
    <h2>Next Steps</h2>

    <p>Now that the designs have been signed off on, the next steps are&colon;</p>

    <ol>
      <li>Shepherding the development of the tool and any questions or changes that are needed</li>
      <li>QA and UAT testing</li>
      <li>
        Future development may also add more of the functionality of the current spreadsheet tool
        such as showing volume and the Residual Balancing Calculation
      </li>
    </ol>
  </Box>
  <Button>
    <RouterLink to="/">
      <h2>Previous Project</h2>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink to="/">
      <h2>Home</h2>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink to="/">
      <h2>Next Project</h2>
    </RouterLink>
  </Button>
</template>

<script setup>
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
</script>
