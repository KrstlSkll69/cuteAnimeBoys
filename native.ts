/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { CspPolicies, ImageSrc } from "@main/csp";

// ImageSrc contains ConnectSrc so we will just import the one and use both
CspPolicies["i.redd.it"] = ImageSrc;
CspPolicies["*.reddit.com"] = ImageSrc;
CspPolicies["reddit.com"] = ImageSrc;
