/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ConnectSrc, CspPolicies, ImageSrc } from "@main/csp";

CspPolicies["i.redd.it"] = ImageSrc;
CspPolicies["*.reddit.com"] = ConnectSrc;
CspPolicies["reddit.com"] = ConnectSrc;
