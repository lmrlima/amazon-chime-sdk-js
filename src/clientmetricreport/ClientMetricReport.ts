// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * [[ClientMetricReport]] gets the media metrics used by ConnectionMonitor to
 * update connection health data.
 */
export default interface ClientMetricReport {
  /**
   * Gets raw client media metrics
   */
  getObservableMetrics(): { [id: string]: number };

  /**
   * Gets video upstream client media metrics
   */
  getObservableVideoUpstreamMetrics(): { [id: string]: {} };

  /**
   * Gets video downstream client media metrics
   */
  getObservableVideoDownstreamMetrics(): { [id: string]: {} };
}
