


<script>
   export let events = [
        {
            "time": "04:44",
            "participants": ["MNU", "EVE", "ID 1901272"],
            "outcomes": [1.55, 4.00, 5.52],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:46",
            "participants": ["FUL", "WOL", "ID 1901273"],
            "outcomes": [2.00, 3.37, 3.60],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:48",
            "participants": ["BUR", "LUT", "ID 1901274"],
            "outcomes": [2.05, 3.33, 3.51],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:50",
            "participants": ["BHA", "WHU", "ID 1901275"],
            "outcomes": [1.79, 3.59, 4.20],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:52",
            "participants": ["AST", "CRY", "ID 1901276"],
            "outcomes": [1.90, 3.46, 3.85],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:54",
            "participants": ["BOU", "LIV", "ID 1901277"],
            "outcomes": [2.97, 3.72, 2.13],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:56",
            "participants": ["SHU", "FUL", "ID 1901278"],
            "outcomes": [2.75, 3.58, 2.32],
            "additional_markets": "+22 Market"
        },
        {
            "time": "04:58",
            "participants": ["WHU", "MNC", "ID 1901279"],
            "outcomes": [3.93, 4.26, 1.70],
            "additional_markets": "+22 Market"
        },
        {
            "time": "05:00",
            "participants": ["EVE", "ARS", "ID 1901280"],
            "outcomes": [3.87, 4.22, 1.72],
            "additional_markets": "+22 Market"
        },
        {
            "time": "05:02",
            "participants": ["NOT", "CRY", "ID 1901411"],
            "outcomes": [2.40, 3.30, 2.82],
            "additional_markets": "+22 Market"
        },
        {
            "time": "05:04",
            "participants": ["AST", "LIV", "ID 1901412"],
            "outcomes": [2.38]
        }
    ];
</script>







<div class="block_516e7">
    <div>
        <div class="header_d940e">Upcoming events</div>
        <div class="header_46173">
            <div
                class="title_164da bold_d6134 centered_ca6d5 uppercase_13b1e stretch_bda52"
                style="width: 3.75rem;"
            ></div>
            <div class="title_164da centered_ca6d5 uppercase_13b1e" style="width: 3.625rem;">
                1
            </div>
            <div class="title_164da centered_ca6d5 uppercase_13b1e" style="width: 3.625rem;">
                X
            </div>
            <div class="title_164da centered_ca6d5 uppercase_13b1e" style="width: 3.625rem;">
                2
            </div>
            <div class="title_164da centered_ca6d5 uppercase_13b1e" style="width: 1rem;"></div>
        </div>
    </div>
    <div>
        <div class="container_8ebcb">
            <div class="event-row_38f05 event-row_3b5cc">
                <div class="time-column_3bf2d time-column_d038e">
                    <span class="event-time_2f750">04:44</span>
                </div>
                <div class="participants_fc1cc participants_611b6">
                    <div>MNU</div>
                    <div>EVE</div>
                    <div class="id_20844"><span>ID 1901272</span></div>
                </div>
                <div class="markets-container_d6c25">
                    <div class="main-markets_70f64">
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>1.55</span></div>
                            </button>
                        </div>
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>4.00</span></div>
                            </button>
                        </div>
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>5.52</span></div>
                            </button>
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="virtual-additional-markets-column_dc25e link_39493">+22 Market</a>
                </div>
            </div>
        </div>
        <div class="container_8ebcb">
            <div class="event-row_38f05 event-row_3b5cc">
                <div class="time-column_3bf2d time-column_d038e">
                    <span class="event-time_2f750">04:46</span>
                </div>
                <div class="participants_fc1cc participants_611b6">
                    <div>FUL</div>
                    <div>WOL</div>
                    <div class="id_20844"><span>ID 1901273</span></div>
                </div>
                <div class="markets-container_d6c25">
                    <div class="main-markets_70f64">
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>2.00</span></div>
                            </button>
                        </div>
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>3.37</span></div>
                            </button>
                        </div>
                        <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                            <button class="outcome_06615">
                                <div><span>3.60</span></div>
                            </button>
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a class="virtual-additional-markets-column_dc25e link_39493">+22 Market</a>
                </div>
            </div>
        </div>
        <div class="container_8ebcb">
            {#each events as event}
                <div class="event-row_38f05 event-row_3b5cc">
                    <div class="time-column_3bf2d time-column_d038e">
                        <span class="event-time_2f750">{event.time}</span>
                    </div>
                    <div class="participants_fc1cc participants_611b6">
                        {#each event.participants as participant}
                            <div>{participant}</div>
                        {/each}
                    </div>
                    <div class="markets-container_d6c25">
                        <div class="main-markets_70f64">
                            {#each event.outcomes as outcome}
                                <div class="virtual-outcome-column_09fa4 outcome-column_45ba9">
                                    <button class="outcome_06615">
                                        <div><span>{outcome}</span></div>
                                    </button>
                                </div>
                            {/each}
                        </div>
                        {#if event.additional_markets}
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a class="virtual-additional-markets-column_dc25e link_39493">{event.additional_markets}</a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>